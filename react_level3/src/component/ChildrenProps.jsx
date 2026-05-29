import Containers from "./ChildrenProps.module.css";
function ChildrenProps(props) {
  return (
    <>
      <div className={Containers.container}>{props.children}</div>
    </>
  );
}

export default ChildrenProps;
