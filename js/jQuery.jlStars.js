(function ($) {
    function Stars(ele, options) {
        // 父层样式编写
        this.$ele = $(ele);
        this.$ele.css({
            display: "inline-block",
            height: 100
        });
        this.options = $.extend({
            count: 5,
            value: 5
        }, options)

        // 添加星星
        for (var i = 0; i < this.options.count; i++) {
            var span = document.createElement("span");
            span.innerText = "★";
            span.style.cssText = "line-height:100px;font-size:90px;color:red;cursor:pointer";
            span.setAttribute("data-index", i + 1);
            this.$ele.append(span);
        }

        var i = document.createElement("i");
        i.style.cssText = "height:100px;line-height:100px;font-size:40px"
        this.$ele.append(i);

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "fwtd");
        this.$ele.append(input);

        this.spans = this.$ele.find("span");
        this.spans.click(function (even) {
            this.click(even.target.dataset.index);
            this.$ele.find("i").text(even.target.dataset.index + "分");
            this.$ele.find("input").val(even.target.dataset.index);
        }.bind(this));
        this.one = true;
        if (true) {
            this.click(this.options.value);
            this.$ele.find("i").text(this.options.value + "分");
            this.$ele.find("input").val(this.options.value);
            this.one = false;
        }
    }

    Stars.prototype = {
        click: function (index) {
            this.spans.each(function (i, ele) {
                if (index >= Number(ele.dataset.index)) {
                    console.log(true);
                    ele.style.color = "yellow";
                } else {
                    ele.style.color = "red";
                }
            })
        }
    }

    $.fn.jlStars = function (options) {
        this.each(function (i, el) {
            new Stars(el, options);
        })
        return this;
    };
})(jQuery);
