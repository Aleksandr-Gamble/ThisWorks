sudo docker run --rm \
	-v "$PWD/nginx.conf:/etc/nginx/nginx.conf:ro" \
	-v "$PWD:/usr/share/nginx/html" \
	-p 80:80 \
	nginx:mainline