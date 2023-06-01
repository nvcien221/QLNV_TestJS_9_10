

function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            //!chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
        }

        //?hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        //trả kết quả true
        return true;
    }

    this.checkTk = function(value, spanID, message){
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value.length >= 4 && value.length <= 6) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }

    this.checkID = function (value, spanID, message, mangNV) {
        // some(): duyệt mảng, kiểm tra theo điều kiện => return true/false
        
        var isExist = mangNV.some(function (nv, index) {
            // return biểu thức so sanh
            return nv.tk === value;
        });

        if (isExist) {
            //đã tồn tại mã
            //!chưa hợp lệ
            //thông báo lỗi
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
        }
        //?hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        //trả kết quả true
        return true;
    }

    this.checkNameNV = function (value, spanID, message){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if(value.match(pattern)){
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
            //!chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
    }

    
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }

    this.checkMK = function(value, spanID, message){
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,10}$/;
        if (value.match(pattern)) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }

    this.checkDate = function(value, spanID, message){
        var pattern = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
        if (value.match(pattern)) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }

    this.checkSalary = function (value, spanID, message){
        if(value >= 1e6 && value <= 20e6){
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;       
    }

    this.checkChucVu = function(value, spanID, message){
        if(value == "Sếp" || value == "Trưởng phòng" ||value == "Nhân viên"  ){
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false; 
    }

    this.checkGioLam = function(value, spanID, message){
        if(value >= 80 && value <= 200){
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false; 
    }
}