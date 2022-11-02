sudo rm -r /root/.pm2/logs 

pm2 start acc_1.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_2.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_3.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_4.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_5.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_6.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_7.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_8.js --exp-backoff-restart-delay=100 --name $RANDOM
pm2 start acc_9.js --exp-backoff-restart-delay=100 --name $RANDOM