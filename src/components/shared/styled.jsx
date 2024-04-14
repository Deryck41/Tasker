import { styled } from "styled-components";
import TaskEl from "../Task";
import ColorPicker from "../ColorPicker";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color 0.3s;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
  ${(props) =>
    props.iconed
      ? `display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;`
      : null}
  ${(props) => (props.shape === "circle" ? `border-radius: 50%;` : null)}
  ${(props) => (props.right ? `right: ${props.right}` : null)}
  ${(props) => (props.color ? `color: ${props.color}` : null)}
  ${(props) => (props.bg ? `background-color: ${props.bg}` : null)}
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  box-shadow: none;
  &:hover {
    background-color: rgba(71, 71, 71, 0.2);
  }
`;

export const DisplayDay = styled.span`
  font-family: Roboto, sans-serif;
  font-size: calc(2.8em);
  font-weight: 500;
`;

export const DisplayWeekDay = styled(DisplayDay)`
  text-transform: uppercase;
  font-size: calc(1.4em);
  font-weight: 600;
`;
export const DisplayMonth = styled(DisplayDay)`
  font-size: large;
  font-weight: 500;
`;

export const DisplayYear = styled(DisplayMonth)`
  font-weight: 300;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => (props.justify ? `justify-content: ${props.justify}` : null)}
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TaskContainer = styled.div`
  /* padding-bottom: 24px; */
`;

export const Task = styled(TaskEl)`
  padding: 0px 20px;
  user-select: none;
  display: flex;
  font-family: Roboto, sans-serif;
  transition: 0.3s background-color ease-out;
  height: 44px;
  cursor: auto !important;

  &:hover {
    background-color: rgba(100, 100, 100, 0.3);
  }

  .task::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 1px;
    background-color: #4e5162;
    transition: 0.3s width ease-out;
  }

  .task.completed::before {
    width: 100%;
  }

  .task {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .completed {
    color: #bbb;
  }
`;

export const IconsVisor = styled.div`
  background: #fff;
  width: 400px;
  opacity: 1;
  height: 700px;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ColorChoiser = styled(ColorPicker)`
  position: absolute;
  left: 0;
  top: 0;
`;
