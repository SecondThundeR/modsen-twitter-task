import {
  useRef,
  useCallback,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";

export function useAddTweetImage() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileClear = useCallback(() => {
    setSelectedFile(undefined);
  }, []);

  const handleClick = useCallback(() => {
    inputRef?.current?.click();
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      setSelectedFile(event.target.files?.[0]);
    },
    [],
  );

  useEffect(() => {
    if (!selectedFile) {
      setPreviewImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return {
    selectedFile,
    previewImage,
    inputRef,
    handlers: { handleFileClear, handleClick, handleChange },
  };
}
