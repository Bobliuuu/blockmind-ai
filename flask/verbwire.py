import requests

url = "https://api.verbwire.com/v1/nft/mint/mintFromMetadataUrl"

payload = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"quantity\"\r\n\r\n1\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"chain\"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"allowPlatformToOperateToken\"\r\n\r\ntrue\r\n-----011000010111000001101001--\r\n\r\n"
headers = {
    "accept": "application/json",
    "content-type": "multipart/form-data; boundary=---011000010111000001101001"
}

response = requests.post(url, data=payload, headers=headers)

print(response.text)