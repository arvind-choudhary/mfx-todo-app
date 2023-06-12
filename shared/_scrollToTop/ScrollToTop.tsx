import React, { forwardRef, useCallback, useEffect, useRef } from 'react'
import { Button } from 'react-aria-components';

interface IPROPS {}

const ScrollTo = forwardRef((props: IPROPS, ref: any) => {

    const btnRef = useRef<HTMLButtonElement>(null)

    const onScroll = useCallback(() => {
      if (ref.current.scrollTop > 0) {
        btnRef.current!.style.display = 'inline-block';
      } else {
        btnRef.current!.style.display = 'none';
      }
    }, []);

    const scrollToTop = useCallback(() => {
        ref.current?.scrollTo({ top: 0,  behavior: "smooth" });
    }, [ref.current]);

    useEffect(() => {
      btnRef.current!.style.display = 'none';
      if (ref.current) { ref.current.addEventListener('scroll', onScroll);}
    },[ref.current]);

    return <Button onPress={scrollToTop} ref={btnRef}>Scroll To Top</Button>
});

export { ScrollTo };