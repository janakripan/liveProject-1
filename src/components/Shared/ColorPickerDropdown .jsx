import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { IoMdColorPalette } from "react-icons/io";


export const ColorPickerDropdown = ({ editor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [baseColor, setBaseColor] = useState("#000000");
  const [adjustedColor, setAdjustedColor] = useState("#000000");
  const [inputColor, setInputColor] = useState("#000000");
  const [intensity, setIntensity] = useState(1);

  const pickerRef = useRef(null); // 👉 Create a ref
  const presetColors = ["#000000", "#FF0000", "#008000", "#0000FF", "#FFA500", "#800080"];

  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyColor = (rawColor) => {
    setBaseColor(rawColor);
    setInputColor(rawColor);
    const adjusted = adjustColorStrength(rawColor, intensity);
    setAdjustedColor(adjusted);
    editor.chain().focus().setColor(adjusted).run();
  };

  const adjustColorStrength = (color, factor) => {
    let r, g, b;
    if (color.startsWith("#")) [r, g, b] = hexToRgb(color);
    else if (color.startsWith("rgb")) [r, g, b] = color.match(/\d+/g).map(Number);
    const lighten = (c) => Math.round(c + (255 - c) * (1 - factor));
    return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
  };

  const hexToRgb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputColor(value);
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value) || /^rgb\(/.test(value)) {
      setBaseColor(value);
      const adjusted = adjustColorStrength(value, intensity);
      setAdjustedColor(adjusted);
      editor.chain().focus().setColor(adjusted).run();
    }
  };

  return (
    <div className="relative" ref={pickerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 border border-heading rounded"
      >
        <div
          className="w-5 h-5 rounded border  "
          style={{ backgroundColor: adjustedColor }}
        />
        <IoMdColorPalette   style={{color:"#E2E2E2" , fontSize:"20px"}} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 flex bg-white border rounded shadow-lg p-3 w-[420px]">
          {/* Left: Presets + Strength */}
          <div className="flex flex-col gap-2 pr-4 border-r w-[45%]">
            <div className="grid grid-cols-3 gap-1">
              {presetColors.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: preset }}
                  onClick={() => applyColor(preset)}
                />
              ))}
            </div>
            <label className="text-xs mt-2 text-gray-700">Strength</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={intensity}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setIntensity(val);
                const adjusted = adjustColorStrength(baseColor, val);
                setAdjustedColor(adjusted);
                editor.chain().focus().setColor(adjusted).run();
              }}
            />
          </div>

          {/* Right: Picker + Input */}
          <div className="flex flex-col items-start gap-2 px-4 w-[55%]">
            <div className="w-full max-w-[140px]">
              <HexColorPicker color={baseColor} onChange={applyColor} />
            </div>
            <input
              type="text"
              value={inputColor}
              onChange={handleInputChange}
              placeholder="#000000 or rgb(0,0,0)"
              className="border px-2 py-1 rounded w-full text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};
