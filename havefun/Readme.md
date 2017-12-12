# Fun

## Chrome log color
```javascript
console.log('%c this is colored','background:#aaa;color:#bada55','this is not colored');
```

## Command Line ANSI Code
[super fun](http://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html#256-colors)
```python
import sys
for i in range(0, 16):
    for j in range(0, 16):
        code = str(i * 16 + j)
        sys.stdout.write(u"\u001b[38;5;" + code + "m " + code.ljust(4))
    print u"\u001b[0m"
```


## Resize Image tool
