tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1440px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1440px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '24px',
                    '3xl': '40px',
                    '2xl': '32px',
                    xl: '32px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                DEFAULT: "#036799",
                '2': '#044465',
            },
           
            neutralc: {
                // 1000: "#",
                950: "#0D0D0D",
                900: "#1A1A1A",
                800: "#333333",
                700: "#4D4D4D",
                600: "#666666",
                500: "#222222",
                400: "#999999",
                300: "#B3B3B3",
                200: "#CCCCCC",
                100: "#E6E6E6",
                50: "#F2F2F2",
                0 : "#FFFFFF",
            },
        }
    }
}