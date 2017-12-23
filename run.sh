#/bin/sh
if [ "$NODEWATCH" = "watch" ] ; then
	npm run start_watch
else 
	npm start
fi
