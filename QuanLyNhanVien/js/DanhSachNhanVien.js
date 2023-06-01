

function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.findIndex = function(maTk){
        findIndex = -1;
        this.mangNV.map(function(nv,index){
            if(nv.tk === maTk){
                findIndex = index;
            }
        })
        return findIndex;
    }

    this.xoaNV = function(maTK){
        var index = this.findIndex(maTK);
       // console.log(index);
        if(index > -1){
            this.mangNV.splice(index,1);
        }
    }

    this.capNhat = function (nv) {
        indexFind = this.findIndex(nv.tk);
        if(indexFind > -1){
            dsnv.mangNV[indexFind] = nv;
            return true;
        }else{
            return false;
        }
    }


    this.timKiemTheoLoai = function(tuTim){
    var mangTK = [];
    var tuTimThuong = tuTim.toLowerCase();
    var tuTimReplace = tuTimThuong.replace(/\s/g,"");
    //console.log("Cần ss",tuTimReplace)
    this.mangNV.map(function(nv,index){
        var loaiThuong = nv.rank.toLowerCase();
        var loaiReplace = loaiThuong.replace(/\s/g,"");
       // console.log(tenReplace);
        var result = loaiReplace.indexOf(tuTimReplace);
        if(result > -1){
            // tìm thấy
            mangTK.push(nv);
        }
    });
    return mangTK;
    //console.log(mangTK);
    }
}