interface VideoProps {
    style?: any;
    children?: any;
    onClick?: () => void;
    src: string;
}

export default function Video(props: VideoProps) {
    return (
        <video
            onClick={() => {
                props?.onClick?.()
            }}
            src={props.src}
            style={props?.style ?? {}}
        >
            {props.children}
        </video>
    );
}

