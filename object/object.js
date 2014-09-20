var Animal = function(name, sex) {
    this.name = name; //プロパティ
    this.sex = sex; //プロパティ
    //メソッド
    this.toString = function() {
        window.alert(this.name + " " + this.sex);
    };
}