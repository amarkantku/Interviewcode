def oneToN(n):
    if n is 0:
        print(n)
        return n
    else:
        n = n-1
        oneToN(n)
        print(n+1)

oneToN(5)

