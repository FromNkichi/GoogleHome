googlehometest: test.js
	sudo service dbus start
	sudo service avahi-daemon start
	sudo systemctl enable dbus
	sudo systemctl enable avahi-daemon
	node test.js

.PHONY: clean
clean:
	sudo service dbus stop
	sudo service avahi-daemon start
	sudo systemctl disable dbus
	sudo systemctl disable avahi-daemon
