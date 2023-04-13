import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Paginations from '../pagination/Paginations';
import { BASE_URL } from '../../services/helper';
import { NavLink } from 'react-router-dom';
import { statuschangefunc } from "../../services/Apis"
import { ToastContainer, toast } from "react-toastify"
import "./table.css"

const Tables = ({ userdata, deleteUser, userGet, handlePrevious, handleNext, page, pageCount, setPage }) => {

  const handleChange = async (id, status) => {
    const response = await statuschangefunc(id, status);

    if (response.status === 200) {
      userGet();
      toast.success("Status Updated")
    } else {
      toast.error("error ")
    }
  }

  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>Project ID</th>
                    <th>Project Name</th>
                    <th>Domain</th>
                    <th>Professor Name</th>
                    <th>Professor Email</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userdata.length > 0 ? userdata.map((element, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1 + (page - 1)*4}</td> 
                            <td><a href={element.linkedin}>{element.projectname}</a></td>
                            <td>{element.domain}</td>
                            <td>{element.fname + element.lname}</td>
                            <td>{element.email}</td>
                            <td className='d-flex align-items-center'>
                              <Dropdown className='text-center'>
                                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                  <Badge bg={element.status == "Active" ? "primary" : "danger"}>
                                    {element.status} <i class="fa-solid fa-angle-down"></i>
                                  </Badge>
                                </Dropdown.Toggle>
                              </Dropdown>
                            </td>
                            <td className='img_parent'>
                              <a href={element.github}>
                              <img src={`${BASE_URL}/uploads/${element.profile}`} alt="img" />
                              </a>
                            </td>
                            <td>
                              <Dropdown>
                                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item >
                                    <NavLink to={`/userprofile/${element._id}`} className="text-decoration-none">
                                      <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                    </NavLink>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        </>
                      )
                    }) : <div className='no_data text-center'>NO Data Found</div>
                  }


                </tbody>
              </Table>
              <Paginations
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
              />
            </Card>
          </div>
        </Row>
        <ToastContainer />
      </div>
    </>
  )
}

export default Tables