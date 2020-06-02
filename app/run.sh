docker build -t app .
docker run \
    -p 3000:3000 \
    -p 9229:9229 \
    app


    189.79.80.161
curl -i \
    -X POST \
    -d '{"valor1":"120","valor2": "10"}' \
    http://192.168.15.18:3000