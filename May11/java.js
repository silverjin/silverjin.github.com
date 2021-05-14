var content = 'Here is the space that we making by ourselves, away from a society that we belonged to the past. We, who left the family of origin have our own space in here to be fully self-portrait. We get a sense of stability and comfort from those who share the space together. I want to say we can be a family even if we are not a biological family, and here can be our home even if here is not our real home.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
