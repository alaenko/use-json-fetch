import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

export default function UseHook({url}) {
  const [data, loading, error] = useJsonFetch(url);
  return (
    <div>
      {loading ? <span>Loading...</span> : data && <p>{data.status}</p>}
      {error && <span>Error!</span>}
    </div>
  )
}

UseHook.propTypes = {
  url: PropTypes.string.isRequired
}

