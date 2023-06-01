function NhanVien(tk,hoTen,email,mk,ngayLam,luongCoBan,chucVu,gioLamTrongThang) {
    this.tk = tk;
    this.tenNV = hoTen;
    this.email = email;
    this.mk = mk;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLamTrongThang;
    this.totalSalary = 0;
    this.rank = "";
    this.tongLuong = function(){
        if(this.chucVu == "Sếp"){
            this.totalSalary = this.luongCoBan * 3;
        }else if(this.chucVu == "Trưởng phòng"){
            this.totalSalary = this.luongCoBan *2;
        }else{
            this.totalSalary = this.luongCoBan;
        }
        return this.totalSalary;
    }

    this.xepLoai = function(){
        if(this.gioLamTrongThang >= 192){
            this.rank = "Xuất Sắc";
        }else if(this.gioLamTrongThang >= 176 && this.gioLamTrongThang < 192){
            this.rank = "Giỏi";
        }else if(this.gioLamTrongThang >= 160 && this.gioLamTrongThang < 176){
            this.rank = "Khá";
        }else if(this.gioLamTrongThang < 176 && this.gioLamTrongThang >  0){
            this.rank = "Trung Bình";
        }else{
            alert("Số giờ làm nhân viên không hợp lệ!")
        }
    }
}