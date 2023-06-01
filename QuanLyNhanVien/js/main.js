


const dsnv = new DanhSachNhanVien();
const validation = new Validation();



function setLocalStorage() {
    localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNV")); 
    if(dataLocal !== null){
        hienThi(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage();

//Them Nhan Vien
function themNV() {
    tk = document.getElementById("tknv").value ;
    tenNV = document.getElementById("name").value ;
    email = document.getElementById("email").value ;
    mk = document.getElementById("password").value ;
    ngayLam = document.getElementById("datepicker").value ;
    luongCoBan = document.getElementById("luongCB").value ;
    chucVu = document.getElementById("chucvu").value ;
    gioLamTrongThang = document.getElementById("gioLam").value ;


    var isVali = true;
    //Check tài khoản nhân viên: (trùng,để trống,số kí tự)
    isVali &= validation.checkEmpty(tk,"tbTKNV","Mã nhân viên không để trống!") 
            && validation.checkTk(tk,"tbTKNV","Mã chứa 4-6 kí tự số")
            && validation.checkID(tk,"tbTKNV","Mã đã tồn tại!",dsnv.mangNV);
    //Check tên nhân viên(Chứa kí tự chữ, để trống)
    isVali &=   validation.checkNameNV(tenNV,"tbTen","Tên nhân viên chỉ chứa kí tự chữ!")
                && validation.checkEmpty(tenNV,"tbTen","Tên nhân viên không để trống!");
    //Check Email (định dạng, để trống)
    isVali &=   validation.checkEmail(email,"tbEmail","Email không hợp lệ!")
                &&validation.checkEmpty(email,"tbEmail","Email không để trống!");
    //Check mật khẩu nhân viên
    isVali  &= validation.checkEmpty(mk,"tbMatKhau","Mật khẩu không để trống!")
                &&validation.checkMK(mk,"tbMatKhau","Chứa 6-10 kí tự và có ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt");
    //Check ngày làm
    isVali &= validation.checkEmpty(ngayLam,"tbNgay","Ngày làm không được để trống!")
            && validation.checkDate(ngayLam,"tbNgay","Định dạng ngày làm chưa hợp lệ(mm/dd/yyyy)");
    //CheckSalary
    isVali &= validation.checkSalary(luongCoBan,"tbLuongCB","Lương cơ bản không hợp lệ!")
            && validation.checkEmpty(luongCoBan,"tbLuongCB","Lương cơ bản không để trống!");
    //Check Chức vụ
    isVali &= validation.checkChucVu(chucVu,"tbChucVu","Hãy chọn chức vụ!");
    //console.log(chucVu);
    //Check Giờ làm
    isVali &= validation.checkGioLam(gioLamTrongThang,"tbGiolam","Số giờ làm trong khoảng 80-200 giờ!")
            && validation.checkEmpty(gioLamTrongThang,"tbGiolam","Giờ làm không để trống!");
        

    if(isVali){
        var nv = new NhanVien(tk,tenNV,email,mk,ngayLam,Number(luongCoBan),chucVu,Number(gioLamTrongThang));
        nv.tongLuong();
        nv.xepLoai();
        dsnv.themNV(nv);
        setLocalStorage() ;
        hienThi(dsnv.mangNV);
    }        
}
document.getElementById("btnThemNV").onclick = themNV;


function hienThi(mang) {
    var content ="";
    mang.map(function(nv,index){
        var trNV = `<tr>
            <td>${nv.tk}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.totalSalary}</td>
            <td>${nv.rank}</td>
            <td>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tk}')" >Xóa</button>
            <button class="btn btn-info btnInfo" data-toggle="modal"
            data-target="#myModal" onclick="xemThongTin('${nv.tk}')">Xem</button>
            </td>
        </tr>`

        content += trNV ;
    })
    document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(tk) {
    dsnv.xoaNV(tk);
    setLocalStorage() ;
    hienThi(dsnv.mangNV);

}



function xemThongTin(tk){
    var indexFind = dsnv.findIndex(tk);
    if (indexFind > -1) {
        //tìm thấy vị trí của nv
        var nvFind = dsnv.mangNV[indexFind]
        //console.log(nvFind);
        document.getElementById("tknv").value = nvFind.tk;
        // document.getElementById("tknv").disabled = true;//ngăn người dùng sửa mã
        document.getElementById("name").value = nvFind.tenNV;
        document.getElementById("email").value = nvFind.email;
        document.getElementById("password").value = nvFind.mk;
        document.getElementById("datepicker").value = nvFind.ngayLam;
        var totalSalary = nvFind.tongLuong();
        document.getElementById("luongCB").value = totalSalary; //  trường lương cơ bản để hiển thị tổng lương khi xem
        document.getElementById("chucvu").value = nvFind.chucVu;
        document.getElementById("gioLam").value = nvFind.gioLamTrongThang;
    }
    
}

function capNhatSV() {
    //? lấy dữ liệu từ form
    tk = document.getElementById("tknv").value ;
    tenNV = document.getElementById("name").value ;
    email = document.getElementById("email").value ;
    mk = document.getElementById("password").value ;
    ngayLam = document.getElementById("datepicker").value ;
    luongCoBan = document.getElementById("luongCB").value ;
    chucVu = document.getElementById("chucvu").value ;
    gioLamTrongThang = document.getElementById("gioLam").value ;

    var isVali = true;
    //Check tài khoản nhân viên: (trùng,để trống,số kí tự)
    isVali &= validation.checkEmpty(tk,"tbTKNV","Mã nhân viên không để trống!") 
            && validation.checkTk(tk,"tbTKNV","Mã chứa 4-6 kí tự số")
            && validation.checkID(tk,"tbTKNV","Mã đã tồn tại!",dsnv.mangNV);
    //Check tên nhân viên(Chứa kí tự chữ, để trống)
    isVali &=   validation.checkNameNV(tenNV,"tbTen","Tên nhân viên chỉ chứa kí tự chữ!")
                && validation.checkEmpty(tenNV,"tbTen","Tên nhân viên không để trống!");
    //Check Email (định dạng, để trống)
    isVali &=   validation.checkEmail(email,"tbEmail","Email không hợp lệ!")
                &&validation.checkEmpty(email,"tbEmail","Email không để trống!");
    //Check mật khẩu nhân viên
    isVali  &= validation.checkEmpty(mk,"tbMatKhau","Mật khẩu không để trống!")
                &&validation.checkMK(mk,"tbMatKhau","Chứa 6-10 kí tự và có ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt");
    //Check ngày làm
    isVali &= validation.checkEmpty(ngayLam,"tbNgay","Ngày làm không được để trống!")
            && validation.checkDate(ngayLam,"tbNgay","Định dạng ngày làm chưa hợp lệ(mm/dd/yyyy)");
    //CheckSalary
    isVali &= validation.checkSalary(luongCoBan,"tbLuongCB","Lương cơ bản không hợp lệ!")
            && validation.checkEmpty(luongCoBan,"tbLuongCB","Lương cơ bản không để trống!");
    //Check Chức vụ
    isVali &= validation.checkChucVu(chucVu,"tbChucVu","Hãy chọn chức vụ!");
    //console.log(chucVu);
    //Check Giờ làm
    isVali &= validation.checkGioLam(gioLamTrongThang,"tbGiolam","Số giờ làm trong khoảng 80-200 giờ!")
            && validation.checkEmpty(gioLamTrongThang,"tbGiolam","Giờ làm không để trống!");

    if(isVali){
        var nv = new NhanVien(tk,tenNV,email,mk,ngayLam,Number(luongCoBan),chucVu,Number(gioLamTrongThang));
        nv.tongLuong();
        nv.xepLoai();
        var result = dsnv.capNhat(nv);
        if (result) {
            //true
            setLocalStorage() ;
            hienThi(dsnv.mangNV);
            resetForm();
            alert("Cập nhật thành công");
        } else {
            //false
            alert("Cập nhật thất bại")
        }
    }


}
function resetForm() {
    document.getElementById("formQLNV").reset();
    document.getElementById("tknv").disabled = false;
}

document.getElementById("btnTimNV").onclick = function(){
    var tuTim = document.getElementById("searchName").value;
    var mangTim =  dsnv.timKiemTheoLoai(tuTim);
    hienThi(mangTim);
}