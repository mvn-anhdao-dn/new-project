#!/bin/bash
# set -x
# read -p "nhap n:" n
# i=0
# while [ $i -lt $n ]
# do
#     echo tong = $i
#     ((i++))
# done
node --help &> /dev/null : hố đen
if [[ $? -ne 0 ]]; then
    echo "Node doesn't existing, please install !!!!"
else
    echo "Node already INSTALLED"
fi