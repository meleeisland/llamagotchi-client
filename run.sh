#/bin/sh
if [ "$NODEWATCH" = "watch" ] ; then
	npm run start_watch
elif [ "$NODEWATCH" = "standard" ] ; then
	npm run set_standard
else 
	npm start
fi
