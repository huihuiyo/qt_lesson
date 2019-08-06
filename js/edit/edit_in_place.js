/**
 * @function 就地编辑
 * @author LY
 * 网站的基础类 不要重复造轮子
 * 不是具体的业务 抽象的公共业务
 */
function EditInPlace (id, parent, initVal) {
    // constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initVal || "default value";
    this.createElement(); // 动态DOM
    this.attachEvents();
}
EditInPlace.prototype.createElement = function () {
    this.containerElement = document.createElement('div');
    this.containerElement.id = this.id;

    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;

    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    // this.fieldElement.style.display = "none";

    this.containerElement.appendChild(this.fieldElement);   
    this.containerElement.appendChild(this.staticElement);
    this.parentElement.appendChild(this.containerElement);
    
    // 两个状态
    this.converToText();
}

EditInPlace.prototype.converToText = function () {
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}

EditInPlace.prototype.converToEdit = function () {
    this.staticElement.style.display = 'none';
    this.fieldElement.style.display = 'inline';
}

EditInPlace.prototype.attachEvents = function () {
    // 挂载到页面上了？
    // let that = this; // 指向对象
    this.staticElement.addEventListener('dblclick', () => {
        // this被覆盖
        // 应用到对象怎么办？
        this.converToEdit();
    }, false);
    this.fieldElement.addEventListener('keydown', (event) => {
        if (event.keyCode == 13) {
            this.staticElement.innerHTML = this.fieldElement.value; 
            this.converToText();
        }
    })
}