import { deleteUser, updateUser } from "@apis/user.api";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";
import { createNotification } from "@utils/notifications";
import React, { useState } from "react";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "0 20px",
    width: "calc(50% - 40px)",
    marginBottom: "30px",
  },
  label: {
    left: "auto",
  },
}));

const CustomDetailRenderer = (props) => {
  const [cell, setCell] = useState(props.data);
  const classes = useStyles();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    const newData = { ...cell };
    newData[name] = value;
    setCell(newData);
  };

  const handleSelection = (e) => {
    const { value, name } = e.target;

    const newData = { ...cell };
    newData[name] = value === "false" ? false : true;
    setCell(newData);
  };

  const handleSave = async () => {
    await updateUser(cell.id, cell);
    createNotification("success", "Thành công", "Bạn đã chỉnh sửa thành công");
    props.reload()
  };

  const handleDelete = async () => {
    await deleteUser(cell.id);
    createNotification(
      "error",
      "Xóa thành công",
      "User vừa được xóa khỏi danh sách"
    );
  };

  return (
    <div className="container">
      <div className="content-detail">
        <header>
          <h2>Detail Customer</h2>
        </header>

        <main className="content">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="label-name" className={classes.label}>
              Name
            </InputLabel>
            <Input
              name="name"
              id="label-name"
              value={cell.name}
              onChange={handleChangeInput}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="label-username" className={classes.label}>
              Username
            </InputLabel>
            <Input
              name="username"
              id="label-username"
              value={cell.username}
              onChange={handleChangeInput}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="label-status" className={classes.label}>
              Status
            </InputLabel>
            <Select
              native
              value={cell.status}
              inputProps={{ id: "label-status", name: "status" }}
              onChange={handleSelection}
            >
              <option value={"true"}>True</option>
              <option value={"false"}>False</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="label-pass" className={classes.label}>
              Password
            </InputLabel>
            <Input
              name="password"
              type="password"
              id="label-pass"
              value={cell.password}
              onChange={handleChangeInput}
            />
          </FormControl>
        </main>

        <footer>
          <div className="btn-group">
            <div style={{ margin: "20px" }}>
              <Button
                color="primary"
                variant="contained"
                startIcon={<Save />}
                onClick={handleSave}
              >
                Lưu
              </Button>
            </div>
            <div style={{ margin: "20px" }}>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<Delete />}
                onClick={handleDelete}
              >
                Xóa
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CustomDetailRenderer;
