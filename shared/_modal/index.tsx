import { useContext, ReactNode } from 'react'
import classNames from 'classnames';
import { Modal, Dialog, ModalOverlay } from 'react-aria-components';

import { ModalContext } from './ModalContextApi';
import { ICONTEXT } from './modal.type';

import styles from './modal.module.scss';

interface IPROPS { children: ReactNode, className?: string }

const ModalComponent = ({ children, className = '' }: IPROPS) => {
    const modalContext = useContext(ModalContext) as ICONTEXT;
    return (
        <ModalOverlay
            isDismissable={true}
            isOpen={modalContext.isModalOpen}
            onOpenChange={modalContext.setModalVisibleState}
            className={classNames(styles['react-aria-ModalOverlay'], 'fade', className)}
        >
            <Modal>
                <Dialog
                    className={styles['react-aria-modal-overlay-body']}
                    onClose={modalContext.setModalVisibleState}
                    role='alertdialog'
                >
                    {children}
                </Dialog>
            </Modal> 
        </ModalOverlay> 
    )
}

export default ModalComponent