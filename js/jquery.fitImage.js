$.fn.fitImage = function(selector) {
    var $container  = $(this);
    $(window).resize(function() {
        $container.each(function() {
            var $this   = $(this);
            var $image  = $this.find(selector);
            var width   = $this.width();
            var height  = $this.height();
            var newWid  = width;
            var newHei  = Math.floor(width * $image.height() / $image.width());
            if(newHei < height) {
                newHei  = height;
                newWid  = Math.floor(height * $image.width() / $image.height());
            }
            $image.css({width: newWid, height: newHei, marginLeft: (width - newWid) / 2, marginTop: (height - newHei) / 2});
        });
    }).triggerHandler('resize');
};