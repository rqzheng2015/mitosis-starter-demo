interface ViewProps {
    style?: any;
    children?: any;
    onClick?: () => void;
}

export default function View(props: ViewProps) {
    return (
        <div
            style={props?.style ?? {}}
            onClick={() => {
                props?.onClick?.()
            }}
        >
            {props.children}
        </div>
    );
}

