#!/bin/sh

# Start the MySQL server in the background
mysqld_safe --datadir='/var/lib/mysql' &

# Wait for the MySQL server to start
while true; do
    mysqladmin ping -h localhost --silent
    if [ $? -eq 0 ]; then
        break
    fi
    sleep 1
done

# Create the database and user
echo "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};" | mysql -u root -p${MYSQL_ROOT_PASSWORD}
echo "CREATE USER IF NOT EXISTS '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';" | mysql -u root -p${MYSQL_ROOT_PASSWORD}
echo "GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%';" | mysql -u root -p${MYSQL_ROOT_PASSWORD}

# Keep the container running
tail -f /dev/null
