docker build -t app .
docker run \
    -p 3000:3000 \
    -p 9229:9229 \
    app

curl -i \
    -X POST \
    -d '{"valor1": "120", "valor2": "10"}' \
    http://localhost:3000

curl -i \
    -X POST \
    -d '{"valor1": "100", "valor2": "300"}' \
    http://192.168.15.12:3000
 