interface ImageProps {
    style?: any;
    children?: any;
    onClick?: () => void;
    src: string;
}

export default function Image(props: ImageProps) {
    return (
        <img
            style={props?.style ?? {}}
            src={props.src}
            onClick={() => {
                props?.onClick?.()
            }}
        >
            {props.children}
        </img>
    );
}

