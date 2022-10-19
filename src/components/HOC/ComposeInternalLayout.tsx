import InternalLayout from "../../layouts/internalLayouts";


const ComposeInternalLayouts = (Component:any) => (passThroughProps:any) => (
    <>
        <InternalLayout {...passThroughProps} Component={Component} />
    </>
);

export default ComposeInternalLayouts;