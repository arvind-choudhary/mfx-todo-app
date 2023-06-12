import { useState } from "react";
import { Button } from "react-aria-components";
import { AlertDialog } from "@/shared/_alertModal/AlertDialogModal ";

interface IPROP {
    title: string;
    hours: number;
    id: string;
    removeTask: (hours: number, id: string) => void
}
const TaskContent = ({ title, hours, id, removeTask }: IPROP) => {

  const [isOpen, setAlertDialogState ] = useState(false);

  return (
    <>
        <p>{title}</p>
        <p>{hours}</p>
        <p>
          <Button 
            className="delete-task"
            onPress={() => setAlertDialogState(true)}
            aria-label={`Delete ${title}`}
          > 
            Delete
          </Button>
        </p>

        {
          isOpen ? (
            <AlertDialog
              title="Are you sure you want to delete ?"
              confirmLabel="Yes"
              onClose={() => setAlertDialogState(false)}
              variant="default"
              role="alertdialog"
              onConfirm={() => {
                removeTask(hours, id);
                setAlertDialogState(false);
              }}
            >
            </AlertDialog>
          ) : false
        }
    </> 
  )
}

export default TaskContent