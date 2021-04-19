import * as yup from 'yup'

const schema = yup.object().shape({
  kitchens: yup.array().default([]).nullable().notRequired(),
  specialMenu: yup.array().default([]).nullable().notRequired(),
  facilities: yup.array().default([]).nullable().notRequired(),
  averagePriceId: yup.number().required().transform(value => {
    return Number(value) || null
  }),
  images: yup.object().transform(images => {
    const _images = {
      menu: [],
      fullmenu: []
    }

    if (images.menu) {
      images.menu.map((info) => {
        _images.menu.push(info.uid)
      });
    }

    if (images.fullmenu) {
      images.fullmenu.map((info) => {
        _images.fullmenu.push(info.uid)
      });
    }

    return _images
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