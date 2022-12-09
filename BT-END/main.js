var product1 = new Product("Hoa Hồng", 50000, 120000, "https://hoayeuthuong.com/cms-images/thumb/flower-meaning/431448_y-nghia-hoa-hong.jpg", 160);
var product2 = new Product("Hoa Cẩm Chướng", 200000, 320000, "https://hoayeuthuong.com/cms-images/thumb/flower-meaning/434033_y-nghia-hoa-bach-hop.jpg", 360);
var product3 = new Product("Hoa Cát Tường", 300000, 420000, "https://hoayeuthuong.com/cms-images/thumb/flower-meaning/434022_y-nghia-hoa-cat-tuong.jpg", 460);
var product4 = new Product("Hoa Ly", 400000, 520000, "https://hoayeuthuong.com/cms-images/thumb/flower-meaning/434020_y-nghia-hoa-ly.jpg", 160);
var product5 = new Product("Hoa Sinh Nhật", 500000, 620000, "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-sinh-nhat/13376_chuyen-yeu.jpg", 620);
var product6 = new Product("Hoa Tình Yêu", 400000, 520000, "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tinh-yeu/13254_only-rose-premium-1.jpg", 560);
var product7 = new Product("Hoa Chúc Mừng", 900000, 1620000, "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-chuc-mung/13370_congrats-mini-size-3.jpg", 60);

arrProductAll = [product1, product2, product3, product4, product5, product6, product7]


display(arrProductAll)

function display(arrProduct) {
    var data = "";
    for (let i = 0; i < arrProduct.length; i++) {


        data += `
                    <div class="product-item">
                        <div id="imgProduct">
                         <a href=""><img src="${arrProduct[i].image}" alt="" width="210px" height="180px"></a>
                        </div>
                
                      <div id="nameProduct">
                        <a href="">${arrProduct[i].name}</a>
                      </div>
                      
                      <div id="price1">
                        <span id="price-s">${arrProduct[i].price} đ</span>
                        <span id="price2">${arrProduct[i].priceOld} đ</span><br>                   
                       </div>    
                        
                        <div id="mass" >
                             <span>KL: ${arrProduct[i].mass}g</span>  
                        </div>   
                        <div id="btn-product">
                           <button type="submit" id="btn-edit" onclick="editProduct(${i})">Sửa</button>
                            <button type="submit" id="btn-delete" onclick="delProduct(${i})">Xóa</button>
                         </div>
                       
                    </div>     
           `
    }
    document.getElementById("displayElement").innerHTML = data;
}


function sortProduct() {
    var select = document.getElementById("sapxep-sanpham");

    if (select.value === "high") {
        arrProductAll.sort((a, b) => b.price - a.price);
        display(arrProductAll)
    }
    if (select.value === "low") {
        arrProductAll.sort((a, b) => a.price - b.price);
        display(arrProductAll)
    }

}


function filterSmall() {
    let productLight = document.getElementById("small");
    let productFit = document.getElementById("fit");
    let productBig = document.getElementById("big");
    let arrProductSmall = []
    if (productLight.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].mass >= 1 && arrProductAll[i].mass <= 100) {
                arrProductSmall.push(arrProductAll[i])
            }

        }
        productFit.checked = false
        productBig.checked = false

        display(arrProductSmall);
    } else {
        display(arrProductAll);
    }

}


function filterFit() {
    let productLight = document.getElementById("small");
    let productFit = document.getElementById("fit");
    let productBig = document.getElementById("big");
    let arrProductFit = []
    if (productFit.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].mass >= 100 && arrProductAll[i].mass <= 500) {
                arrProductFit.push(arrProductAll[i])
            }

        }
        productLight.checked = false
        productBig.checked = false

        display(arrProductFit);
    } else {
        display(arrProductAll);
    }

}


function filterBig() {
    let productLight = document.getElementById("small");
    let productFit = document.getElementById("fit");
    let productBig = document.getElementById("big");
    let arrProductBig = []
    if (productBig.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].mass >= 500 && arrProductAll[i].mass <= 1000) {
                arrProductBig.push(arrProductAll[i])
            }

        }
        productLight.checked = false
        productFit.checked = false

        display(arrProductBig);
    } else {
        display(arrProductAll);
    }

}

function filterProduct50() {
    let product50 = document.getElementById("price50");
    let product100 = document.getElementById("price100");
    let product300 = document.getElementById("price300");
    let product500 = document.getElementById("price500");
    let arrProduct50 = []
    if (product50.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].price >= 50000 && arrProductAll[i].price <= 100000) {
                arrProduct50.push(arrProductAll[i])
            }

        }
        product100.checked = false
        product300.checked = false
        product500.checked = false
        display(arrProduct50);
    } else {
        display(arrProductAll);
    }

}

function filterProduct100() {
    let product100 = document.getElementById("price100");
    let product50 = document.getElementById("price50");
    let product300 = document.getElementById("price300");
    let product500 = document.getElementById("price500");
    let arrProduct100 = []
    if (product100.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].price >= 100000 && arrProductAll[i].price <= 300000) {
                arrProduct100.push(arrProductAll[i])
            }
        }
        product50.checked = false
        product300.checked = false
        product500.checked = false
        display(arrProduct100);
    } else {
        display(arrProductAll);
    }

}

function filterProduct300() {
    let product300 = document.getElementById("price300");
    let product50 = document.getElementById("price50");
    let product100 = document.getElementById("price100");
    let product500 = document.getElementById("price500");
    let arrProduct300 = []
    if (product300.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].price >= 300000 && arrProductAll[i].price <= 500000) {
                arrProduct300.push(arrProductAll[i])
            }
        }
        product50.checked = false
        product100.checked = false
        product500.checked = false
        display(arrProduct300);
    } else {
        display(arrProductAll);
    }

}

function filterProduct500() {
    let product500 = document.getElementById("price500");
    let product50 = document.getElementById("price50");
    let product300 = document.getElementById("price300");
    let product100 = document.getElementById("price100");
    let arrProduct500 = []
    if (product500.checked == true) {
        for (let i = 0; i < arrProductAll.length; i++) {
            if (arrProductAll[i].price >= 500000 && arrProductAll[i].price <= 1000000) {
                arrProduct500.push(arrProductAll[i])
            }
        }
        product50.checked = false
        product300.checked = false
        product100.checked = false
        display(arrProduct500);
    } else {
        display(arrProductAll);
    }

}

function addProductDisplay() {
    let dataAdd = ""
    dataAdd += `
            <div class="input-add" >
                    <input type="text" placeholder="Tên sản phẩm" id="input-name" ><br>
                    <input type="text" placeholder="Giá" id="input-price" ><br>
                    <input type="text" placeholder="Giá cũ" id="input-priceOld" ><br>
                    <input type="text" placeholder="Image" id="input-image" ><br>
                    <input type="text" placeholder="Khối lượng" id="input-mass" ><br>
                    <p id="check" style="color: red; padding: 15px 0px 0px 25px"></p>
                    <input type="submit" value="Thêm" onclick="addProduct()" id="btn-addProduct">
                     <input type="submit" value="Hủy" onclick="cancelAdd()" id="btn-cancel">
                  
                </div>    
    `
    document.getElementById("add-product").innerHTML = dataAdd;
}

function addProduct() {
    let nameProduct = document.getElementById("input-name").value;
    let imageProduct = document.getElementById("input-image").value;
    let priceProduct = +document.getElementById("input-price").value;
    let priceOldProduct = +document.getElementById("input-priceOld").value;
    let massProduct = +document.getElementById("input-mass").value;
    let check = document.getElementById("check");

    if (nameProduct == "" || imageProduct == "" || priceProduct == "" || priceOldProduct == "" || massProduct == "") {
        check.innerHTML = "* Không được để trống thông tin"
    } else if (isNaN(priceProduct) || isNaN(priceOldProduct)) {
        check.innerHTML = "* Giá sản phẩm phải là số"
    } else if (isNaN(massProduct)) {
        check.innerHTML = "* Khối lượng phải là sô"
    }
    else
        {
            var product = new Product(nameProduct, priceProduct, priceOldProduct, imageProduct, massProduct);

            arrProductAll.push(product);
            display(arrProductAll);
            document.getElementById("add-product").innerHTML = ""
        }


    }

    function cancelAdd() {
        document.getElementById("add-product").innerHTML = "";
    }


    function delProduct(index) {
        if (confirm("Do you want to delete product")) {
            arrProductAll.splice(index, 1);
            display(arrProductAll)
        }
    }

// function editProductDisplay() {
//     let dataEdit = ""
//     dataEdit += `
//             <div class="input-edit" >
//                     <input type="text" placeholder="Tên sản phẩm" id="input-name" required><br>
//                     <input type="text" placeholder="Giá" id="input-price" required><br>
//                     <input type="text" placeholder="Giá cũ" id="input-priceOld" required><br>
//                     <input type="text" placeholder="Image" id="input-image" required><br>
//                     <input type="text" placeholder="Khối lượng" id="input-mass" required><br>
//                     <input type="submit" value="Sửa" onclick="editProduct()" id="btn-addProduct">
//                      <input type="submit" value="Hủy" onclick="cancelAdd()" id="btn-cancel">
//                 </div>
//
//
//     `
//     document.getElementById("add-product").innerHTML = dataEdit;
// }

    function editProduct(index) {
        let nameEdit = prompt("Nhập tên mới")
        let priceEdit = +prompt("Nhập giá mới")
        let priceOldEdit = +prompt("Nhập giá cũ")
        let massEdit = +prompt("Nhập khối lượng mới")
        let imageEdit = prompt("Nhập hình ảnh mới")


        if (nameEdit == "" || priceEdit == ""|| priceOldEdit == "" || massEdit == ""  || imageEdit == "" ) {
            alert("Không được để trống thông tin ")
        } else if (isNaN(priceEdit) || isNaN(priceOldEdit)) {
            alert("Giá sản phẩm phải là số")
        } else if (isNaN(massEdit)) {
            alert("Khối lượng sản phẩm phải là số")
        }else {

        arrProductAll[index].name = nameEdit
        arrProductAll[index].price = priceEdit
        arrProductAll[index].priceOld = priceOldEdit
        arrProductAll[index].mass = massEdit
        arrProductAll[index].image = imageEdit

        display(arrProductAll)
    }
}

function searchProduct() {
    let inputSearch = document.getElementById("input-find").value;
    let arrSearch = []
    for(let i = 0; i< arrProductAll.length; i++){
        if(inputSearch == arrProductAll[i].name){
            arrSearch.push(arrProductAll[i])
        }
    }
    display(arrSearch)
    if (arrSearch.length == 0){
        alert("Không tìm thấy sản phẩm")
        display(arrProductAll)
    }
}


//slideShow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



