import moment from 'moment'
import * as yup from 'yup'

const schema = yup.object().shape({
  videoOverviewLink: yup.string().url().default('').nullable().notRequired(),
  tourLink: yup.string().url().default('').nullable().notRequired(),
  about: yup.string().default('').nullable().notRequired(),
  media: yup.object().transform(media => {
    const _media = {
      eventPictures: [],
      videoOverview: [],
      logo: []
    }

    if (media.eventPictures) {
      media.eventPictures.map((info) => {
        _media.eventPictures.push(info.uid)
      })
    }

    if (media.videoOverview) {
      media.videoOverview.map((info) => {
        _media.videoOverview.push(info.uid)
      })
    }

    if (media.logo) {
      media.logo.map((info) => {
        _media.logo.push(info.uid)
      })
    }

    return _media
  })
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