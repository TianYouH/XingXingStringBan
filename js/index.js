function stars() {
    // 父层样式编写
    $("#fwtd").css({
        display: "inline-block",
        // background:"red",
        height: 100
    });

    // 添加星星
    for (var i = 0; i < 5; i++) {
        var span = document.createElement("span");
        span.innerText = "★";
        span.style.cssText = "line-height:100px;font-size:90px;color:red;cursor:pointer";
        span.setAttribute("data-index", i + 1);
        $("#fwtd").append(span);
    }
    var i = document.createElement("i");
    i.style.cssText = "height:100px;line-height:100px;font-size:40px"
    $("#fwtd").append(i);
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "fwtd");
    $("#fwtd").append(input);
    $("#fwtd").find("span").click(function () {
        console.log("哈哈，被点击啦");
        $("#fwtd").find("span").each(function (i, ele) {

            if (ele.dataset.index <= this.dataset.index) {
                ele.style.color = "yellow";
            } else {
                ele.style.color = "red";
            }
            $("#fwtd i").text(this.dataset.index + "分");
            $("#fwtd input").val(this.dataset.index);
        }.bind(this))

    })

}

stars();
