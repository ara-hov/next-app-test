import moment from 'moment'
import * as yup from 'yup'

const schema = yup.object().shape({
  author: yup.string().default('').nullable(),
  eventName: yup.string().required(),
  address: yup.string().default('').nullable().notRequired(),
  // addressLink,
  facebookLink: yup.string().url().default('').nullable().notRequired(),
  instagramLink: yup.string().url().default('').nullable().notRequired(),
  mapLink: yup.string().url().default('').nullable().notRequired(),
  phone: yup.string().default('').nullable().notRequired(),
  regionId: yup.number().nullable().notRequired().transform(value => {
    return Number(value) || null
  }),
  siteName: yup.string().default('').nullable().notRequired(),
  // placeId,
  // placeName,
  workingTimeFrom: yup.date().transform((value: any, originalValue: any) => {
    value = moment(value);
    return value.isValid() ? new Date(value.format("YYYY-MM-DD HH:mm:ss")) : new Date('')
  }),
  workingTimeTo: yup.date().transform((value: any, originalValue: any) => {
    value = moment(value);
    return value.isValid() ? new Date(value.format("YYYY-MM-DD HH:mm:ss")) : new Date('')
  }),
})

const validate = async (data) => {
  let errors = []
  try {
    await schema.validate(data)
  } catch (e) {
    errors = e.errors
  }

  if (errors.length) {
    throw new Error(errors.join(";\n"))
  }
  return errors
}

export {
  schema,
  validate
}