import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './useIsMobile';

describe('useIsMobile hook', () => {
  it('should initialize as false by default', () => {
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('should update to true when window width is less than 1024 pixels', () => {
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(true);
  });

  it('should update to false when window width is greater than or equal to 1024 pixels', () => {
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(false);
  });
});
