import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setstate({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(isMounted.current);

                if (isMounted.current) {
                    setstate({
                        data,
                        loading: false,
                        error: null
                    });
                }
            }).catch(error => {

                if (isMounted.current) {
                    setstate({
                        data: null,
                        loading: false,
                        error: error
                    });

                }
            });
    }, [url]);

    return state;
}
