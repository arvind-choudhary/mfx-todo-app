import type { AriaDialogProps } from "react-aria";
import React from "react";
import { useDialog } from "react-aria";
import { Button } from "react-aria-components";

import styles from './alert.dialog.module.scss'
import classNames from "classnames";

interface AlertDialogProps extends AriaDialogProps {
  children: React.ReactNode;
  title: string;
  variant?: "default" | "destructive";
  confirmLabel: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function AlertDialog(props: AlertDialogProps) {
  let { children, onClose, confirmLabel, onConfirm } = props;

  let ref = React.useRef(null);
  let { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog"
    },
    ref
  );

  return (
    <div className={classNames(styles["alert-dialog"], 'alert-dialog', 'fade')}>
        <div className="alert-dialog-container">
            <div {...dialogProps} ref={ref} >
            <h3 {...titleProps} className="alert-dialog-container-title">
                {props.title}
            </h3>
            {children ? <p className="alert-dialog-container-body">{children}</p> : false }
            <div className="alert-dialog-container-footer">
                <Button onPress={onClose} className='btn button-gray'>Cancel</Button>
                <Button onPress={onConfirm} className='btn button-white'>
                {confirmLabel}
                </Button>
            </div>
            </div>
        </div>
    </div>
  );
}
