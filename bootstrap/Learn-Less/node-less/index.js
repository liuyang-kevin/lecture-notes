// Understand process object;
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

let arg2;
if(process.argv[2]){
    arg2 = process.argv[2];
    let less = require('less');
    if(arg2==='less'){
        less.render('.class { width: 1 + 1 }', function (e, css) {
            console.log(css.css);
        });
    }else if(arg2==='parser') {
        let parser = new(less.Parser);

        //-=-=-=-=-=-=-=-=-=-
        // has problem that I don't know;
        // parser.parse();
        // parser.parse('.class { width: 1 + 1 }', function (err, tree) {
        //     if (err) { return console.error(err) }
        //     // console.log(tree.toCSS());
        // });

        //-=-=-=-=-=-=-=-=-=-
    }else {
        console.log("can't find the way to use second parameter")
    }
}else {
    console.log("can't find second parameter")
}





