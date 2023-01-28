protoc: 
	mkdir -p go/tutorialpb # make directory for go package
	protoc $$PROTO_PATH --go_opt=paths=source_relative --go_out=go/tutorialpb Protobuf lib\lib\constant.proto