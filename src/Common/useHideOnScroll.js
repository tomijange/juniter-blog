import React from 'react';

const useHideOnScroll = () => {
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        function onScroll() {
            var currentScrollPos = window.pageYOffset;
            setHide(prevScrollpos <= currentScrollPos);
            prevScrollpos = currentScrollPos;
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return hide;
}

export default useHideOnScroll;