import requests
import execjs


def myjs(*args):
    with open('test.js', 'r', encoding='utf-8') as f:
        js_code2 = f.read()
    ctx1 = execjs.compile(js_code2)
    result = ctx1.call('result', *args)
    return result

def main():
    kv = myjs()
    sign = kv['sign']
    url = 'https://dsapi.xdf.cn/product/v2/class/search?' + kv['params']
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "sign": sign,
        'Content-Type': 'application/json'
    }

    response = requests.get(url, headers=headers)
    print(response.text)


if __name__ == '__main__':
    ## main()
    ## main()
    ## main()
    print(myjs(20))
