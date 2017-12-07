import sys
f = open('./havefun/256colors.json', 'w')
f.write("{")
for i in range(0, 16):
    for j in range(0, 16):
        code = str(i * 16 + j)
        sys.stdout.write(u"\u001b[38;5;" + code + "m " + code.ljust(4))
        f.write('{}:"{}",'.format("c"+code,"\u001b[38;5;" + code + "m"))
    print u"\u001b[0m"

f.write('{}:"{}"'.format("reset","\u001b[0m"))
f.write("}")
f.close()



f = open('./havefun/256bcolors.json', 'w')
f.write("{")
for i in range(0, 16):
    for j in range(0, 16):
        code = str(i * 16 + j)
        sys.stdout.write(u"\u001b[48;5;" + code + "m " + code.ljust(4))
        f.write('{}:"{}",'.format("c"+code,"\u001b[48;5;" + code + "m"))
    print u"\u001b[0m"

f.write('{}:"{}"'.format("reset","\u001b[0m"))
f.write("}")
f.close()
