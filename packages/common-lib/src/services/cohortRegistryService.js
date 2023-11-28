import * as util from '../Util/util';
import { post, get, update } from './RestClient'
import mapInterfaceData from './mapInterfaceData'

const interfaceData = {
  // id: 'ProgramId',
  id: 'cohortId',
  // schoolId: 'schoolId',
  type: 'type',
  name: 'name',
  section: 'section',
  status: 'status',
  image: 'image',
  // gradeLevel: 'gradeLevel',
  mergeParameterWithValue: {
    title: 'name'
  },
  mergeParameterWithDefaultValue: {
    icon: 'calendar',
    route: '/classes/:id'
  }
}

export const getAll = async (params = {}, header = {}) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
  const result = await post(
    `${process.env.REACT_APP_API_URL}/cohort/search`,
    {
      limit: '',
      page: 0,
      filters: {}
    },
    {
      ...params,
      headers
    }
  )
  if (result.data) {
    // if (params.coreData === 'getCoreData') {
    //   return result.data.data
    // }
    // const data = result.data.data.map((e) => mapInterfaceData(e, interfaceData))
    let res = result.data.data
    res = res.map((item) => {
      if (item?.fields) {
        item.fields = item.fields.map((field) => {
          item[field.name] = ''
          if (field?.fieldValues.length) {
            item[field.name] = field.fieldValues[0].value
          }
          return field
        })
      }
      const omitKeys = ['createdAt', 'updatedAt']
      return util.excludeKeys(item, omitKeys)
    })
    // return res;
    return res.sort(function (a, b) {
      return a.name - b.name;
    });
  } else {
    return []
  }
}

export const getCohortDetails = async (params = {}, header = {}) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
  const result = await get(
    `${process.env.REACT_APP_API_URL}/cohort/${params.cohortId}`,
    { headers }
  )
  if (result.data) {
    return result.data.data
  } else {
    return []
  }
}

export const getCohortMembers = async (data = {}, header = {}) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
  const result = await post(
    `${process.env.REACT_APP_API_URL}/cohortmembers/search`,
    data,
    {
      headers
    }
  )
  if (result.data) {
    let memberData = result.data.data
    const body = {
      filters: {
        userId: { _in: memberData.map((e) => e.userId) }
      }
    }
    let users = await post(
      `${process.env.REACT_APP_API_URL}/user/search`,
      body,
      { headers }
    )
    users = users.data.data

    memberData = memberData
      .map((memberInfo, index) => {
        const user = users.find((user) => user.userId === memberInfo.userId)
        if (user) {
          return {
            ...memberInfo,
            userDetails: user
          }
        }
        return false
      })
      .filter((item) => !!item.userDetails)
    // const memberDetailsPromises = memberData.map((member) => {
    //   return post(
    //     `${process.env.REACT_APP_API_URL}/user/search`,
    //     {
    //       filters: {
    //         userId: { _eq: member.userId }
    //       }
    //     },
    //     { headers }
    //   )
    // })

    // let users = await Promise.all(memberDetailsPromises)
    // users = users.map((user) => user.data.data[0])
    // memberData = memberData.map((memberInfo, index) => {
    //   const user = users.find((user) => user.userId === memberInfo.userId)
    //   if (user) {
    //     return {
    //       ...memberInfo,
    //       userDetails: user
    //     }
    //   }
    //   return memberInfo
    // })

    // .map((e) => mapInterfaceData(e, interfaceData))
    return memberData
    // .sort(function (a, b) {
    //   return a.name - b.name
    // })
  } else {
    return []
  }
}

export const create = async (data, header = {}) => {
  let headers = {
    ...header,
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }

  const result = await post(process.env.REACT_APP_API_URL + '/cohort', data, {
    headers
  })
  if (result.data) {
    return result.data?.data
  } else {
    return false
  }
}

export const updateCohort = async (id, data, header = {}) => {
  let headers = {
    ...header,
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }

  const result = await update(
    process.env.REACT_APP_API_URL + '/cohort/' + id,
    data,
    {
      headers
    }
  )
  if (result.data) {
    return result.data?.data
  } else {
    return false
  }
}
