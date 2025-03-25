import { NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl/mapbox';

// ----------------------------------------------------------------------

export function MapControls({
  hideScale,
  hideGeolocate,
  hideFullscreen,
  hideNavigation,
  slotProps,
}) {
  return (
    <>
      {!hideGeolocate && (
        <GeolocateControl
          position="top-left"
          {...slotProps?.geolocate}
          positionOptions={{ enableHighAccuracy: true, ...slotProps?.geolocate?.positionOptions }}
        />
      )}
      {!hideFullscreen && <FullscreenControl position="top-left" {...slotProps?.fullscreen} />}
      {!hideScale && <ScaleControl position="bottom-left" {...slotProps?.scale} />}
      {!hideNavigation && <NavigationControl position="bottom-left" {...slotProps?.navigation} />}
    </>
  );
}
