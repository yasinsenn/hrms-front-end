import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Segment, Form, Label, Dropdown } from "semantic-ui-react";

import CityService from "../services/cityService";
import JobAdvertService from "../services/jobAdvertService";
import JobPositionService from "../services/jobPositionService";
import TypeOfWorkService from "../services/typeOfWorkService";
import WorkingTimeService from "../services/workingTimeService";

export default function CreateJobAdvert() {
  let jobAdvertService = new JobAdvertService();

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);
  const [typeOfWorks, setTypeOfWorks] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));

    let workTimeTypeService = new WorkingTimeService();
    workTimeTypeService
      .getWorkingTimes()
      .then((result) => setWorkingTimes(result.data.data));

    let workTypeService = new TypeOfWorkService();
    workTypeService
      .getTypeOfWork()
      .then((result) => setTypeOfWorks(result.data.data));
  }, []);

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOptions = jobPositions.map((jobPosition) => ({
    key: jobPosition.id,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));
  const workingTimeOptions = workingTimes.map((workingTime) => ({
    key: workingTime.id,
    text: workingTime.workingTime,
    value: workingTime.id,
  }));
  const typeOfWorkOptions = typeOfWorks.map((typeOfWork) => ({
    key: typeOfWork.id,
    text: typeOfWork.typeOfWork,
    value: typeOfWork.id,
  }));

  const jobAdvertValidation = Yup.object().shape({
    deadlineDate: Yup.date().required(),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPosition: Yup.string().required("Bu alanın doldurulması zorunludur"),
    typeOfWork: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workingTime: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositions: Yup.number()
      .required("Bu alanın doldurulması zorunludur")
      .min(1, "Posizyon sayısı en az 1 olmalıdır"),
    city: Yup.string().required("Bu alanın doldurulması zorunludur"),
    salaryMin: Yup.number().notRequired(),
    salaryMax: Yup.number().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      salaryMin: "",
      salaryMax: "",
      openPositions: "",
      deadlineDate: "",
      cityId: "",
      jobPositionId: "",
      workingTimeId: "",
      typeOfWorkId: "",
    },
    validationSchema: jobAdvertValidation,
    onSubmit: (values) => {
      jobAdvertService
        .addJobAdvert(values)
        .then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi...");
    },
  });

  return (
    <div>
      <Segment inverted>
        <Form onSubmit={formik.handleSubmit} inverted>
          <Form.Field>
            <Label>İş Pozisyonu</Label>
            <Dropdown
              placeholder="İş Pozisyonu Seçiniz"
              fluid
              search
              selection
              clearable
              id="jobPositionId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={jobPositionOptions}
              value={formik.values.jobPositionId}
            />
          </Form.Field>

          <Form.Field>
            <Label>Şehir</Label>
            <Dropdown
              placeholder="Şehir Seçiniz"
              fluid
              search
              selection
              clearable
              id="cityId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={cityOptions}
              value={formik.values.cityId}
            />
          </Form.Field>

          <Form.Field>
            <Label>Çalışma Zamanı</Label>
            <Dropdown
              placeholder="Çalışma Zamanı Seçiniz"
              fluid
              search
              selection
              clearable
              id="workingTimeId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={workingTimeOptions}
              value={formik.values.workingTimeId}
            />
          </Form.Field>

          <Form.Field>
            <Label>Çalışma Türü</Label>
            <Dropdown
              placeholder="Çalışma Türü Seçiniz"
              fluid
              search
              selection
              clearable
              id="typeOfWorkId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={typeOfWorkOptions}
              value={formik.values.typeOfWorkId}
            />
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}
