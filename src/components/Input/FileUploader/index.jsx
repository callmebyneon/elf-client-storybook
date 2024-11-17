import { memo, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { FilePicker, FileProgressbar } from './FilePicker';
import FileCard from './FileCard';
import useFiles from './useFile';

// * empty input => inputted file => form data submitting(loading) after submit btn click => fetching done (submitted)
// ----------------------------------------------------
// | state			|	hasFile	|	isSubmitting	| submitted	|
// |--------------------------------------------------|
// | empty			|		 X		| 			X				|			X			|
// | inputted	  | 	 O		| 			X				| 		X			|
// | loading		| 	 O		| 			O				| 		X			|
// | submitted	| 	 X 		| 			X				|			O			|
// ----------------------------------------------------

const hasFile = (f) => f && f.length > 0;

export const FileUploader = memo(forwardRef((props, ref) => {
  const { allowMultiple, isLoading, submitted, reset, ...otherProps } = props;
  const { files, handleReset, handleInput, handleDelete, handleLoadingDone } = useFiles([]);

  useEffect(() => {
    if (!isLoading && submitted) {
      // setFiles([])
      handleReset()
      reset()
    }
  // eslint-disable-next-line
  }, [isLoading, submitted]);

  const handleDeleteSelectedFile = (event) => {
    handleDelete(event);
    if (allowMultiple === false) reset();
  };

  const FileStatePresentation = isLoading
    ? files.map(file => <FileProgressbar key={file.lastModified} done={handleLoadingDone} file={file} />)
    : (
      <>
        <OptionalFilePicker
          visuallyHidden={allowMultiple !== true && hasFile(files)}
          allowMultiple={allowMultiple}
          {...otherProps}
          onInput={handleInput}
        />
        {hasFile(files) && (
          Object.values(files).map((file, index) => (
            <FileCard
              key={`${file.lastModified}${index}`}
              id={`${file.lastModified}${index}`}
              filename={file.name}
              file={file}
              onDelete={handleDeleteSelectedFile}
            />
          ))
        )}
      </>
    )

  return (
    <Box ref={ref}>
      {/* file selector input */}
      {FileStatePresentation}
    </Box>
  );
}));


FileUploader.propTypes = {
  /**
   * When true, display FileProgressbar instead FilePicker
   * Check underlying state table
   */
  isLoading: PropTypes.bool,
  /**
   * When true, and if loading is end, reset the FileUploader
   */
  submitted: PropTypes.bool,
  /**
   * Function to go to empty input state.
   * When using useForm register (react-hook-form),
   * @see https://react-hook-form.com/api/useform/reset/
   */
  reset: PropTypes.func.isRequired,
}

function OptionalFilePicker({ register, name, ...rest }) {
  if (!register) return <FilePicker name={name} {...rest} />
  return <FilePicker {...register(name, { required: rest?.required ? true : false })} {...rest} />
}
OptionalFilePicker.propTypes = {
  ...FilePicker.propTypes,
  register: PropTypes.func,
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
}
