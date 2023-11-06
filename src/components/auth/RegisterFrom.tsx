import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import React from 'react';
import { BiMailSend } from 'react-icons/bi';

interface Props {
    isRegisterOpen: any;
    onRegisterOpenChange: () => void;
    onLoginOpen: () => void;
}

const RegisterFrom: React.FC<Props> = ({ isRegisterOpen, onRegisterOpenChange, onLoginOpen }) => {
    return (
        <Modal
            isOpen={isRegisterOpen}
            onOpenChange={onRegisterOpenChange}
            placement="top-center"
            backdrop="blur"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Register</ModalHeader>
                        <ModalBody>
                            <Input
                                endContent={
                                    <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <Input
                                endContent={
                                    <BiMailSend className="text-2xl outline-none text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                className="outline-none focus:outline-none"
                            />
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox
                                    classNames={{
                                        label: "text-small",
                                    }}
                                >
                                    Remember me
                                </Checkbox>
                                <span onClick={onLoginOpen} color="primary" >
                                    Login
                                </span>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default RegisterFrom;